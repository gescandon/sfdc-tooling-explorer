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


public class SFDCExplainServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      //String objectName = request.getParameter("objectName");
      //String recordName = request.getParameter("recordName");
      //String explorePath = request.getParameter("explorePath");
      String query = request.getParameter("query");


      String sessionId = (String) request.getSession().getAttribute(OAuthServlet.ACCESS_TOKEN);
      String instanceUrl = (String) request.getSession().getAttribute(OAuthServlet.INSTANCE_URL);
      if (sessionId == null) {
        // you are not authenticated
        response.sendRedirect("/");
        return;
      }

      String explainUrl = instanceUrl + this.getInitParameter("explainApiUrl");
      explainUrl += "/query/?explain=";
      explainUrl += query;

      explainUrl = explainUrl.replaceAll(" ", "+").replaceAll("'", "\'");
    	System.out.println("*** explore query : " + explainUrl);
      HttpClient httpclient = new HttpClient();
      GetMethod get = new GetMethod(explainUrl);
      
      get.setRequestHeader("Authorization", "Bearer " + sessionId);
      get.setRequestHeader("X-PrettyPrint", "1");
      get.setRequestHeader("Content-Type", "application/json");
      String result = "No result";

      try {
          httpclient.executeMethod(get);
          result = get.getResponseBodyAsString();
      } catch (HttpException e) {
          e.printStackTrace();
          throw new ServletException(e);
      }
      finally {
          get.releaseConnection();
      }

      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      out.println(result);
      out.close();
    }
}
