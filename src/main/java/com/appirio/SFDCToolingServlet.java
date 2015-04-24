package com.appirio;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.methods.GetMethod;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONTokener;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URLEncoder;


public class SFDCToolingServlet extends HttpServlet {

    String APEXCLASS_QUERY = "/?q=select+id,+Name,+lastmodifiedbyid,+lastmodifieddate+from+ApexClass";
    String APEXCODECOVERAGE_QUERY = "/?q=select+id,+coverage,+NumLinesCovered,+NumLinesUncovered,+ApexTestClassId,+lastmodifiedbyid,+lastmodifieddate,+ApexClassOrTriggerId+from+ApexCodeCoverage";
    String USER_QUERY = "/?q=select+id,+username,+from+User";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      //String objectName = request.getParameter("objectName");
      //String recordName = request.getParameter("recordName");
      //String explorePath = request.getParameter("explorePath");
      String qtype = request.getParameter("type");
      String qvar = request.getParameter("var");


      String sessionId = (String) request.getSession().getAttribute(OAuthServlet.ACCESS_TOKEN);
      String toolingUrl = (String) request.getSession().getAttribute(OAuthServlet.INSTANCE_URL);
      if (sessionId == null) {
        // you are not authenticated
        response.sendRedirect("/");
        return;
      }

      toolingUrl += this.getInitParameter("toolingApiUrl");
      toolingUrl += "/" + getToolingUrl(qtype, qvar);

      
      String result = "no results";
      result = SFDCToolingManager.explore(toolingUrl, sessionId);
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      out.println(result);
      out.close();
    }

    protected String getToolingUrl(String type, String var) {
      String turl = "";
      if ("query".equals(type)) {
        if ("ApexCodeCoverage".equals(type)) {
          turl = type + APEXCLASS_QUERY;          
        } else {
          // default apex class query
          turl = type + APEXCLASS_QUERY;          
        }
      }
      if("sobjects".equals(type)){
        turl = type + "/" + var;
      }

      /*
      if("completions".equals(type)){
      }
      if("executeAnonymous".equals(type)){
      if("runTestsAsynchronous".equals(type)){
      }
      }
      */
      /*
      if("sobjects/SObjectName".equals(type)){
      }
      if("sobjects/ApexLog".equals(type)){
      }
      */
      return turl;
    }
}
