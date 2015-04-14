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
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String objectName = request.getParameter("objectName");
    String recordName = request.getParameter("recordName");
    String explorePath = request.getParameter("explorePath");
    String sessionId = (String) request.getSession().getAttribute(OAuthServlet.ACCESS_TOKEN);;
     
      
      String result = "no results";
      if (explorePath != null) {
          result = SFDCToolingManager.explore(explorePath, sessionId);
    	  
      } else {
        result = SFDCToolingManager.getTooling(objectName, recordName, sessionId);
      }
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      out.println(result);
      out.close();
    }
}
