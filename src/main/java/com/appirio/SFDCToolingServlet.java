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


public class SFDCToolingServlet extends HttpServlet {
  
	String endpoint;
	String hostname;
    public void init() throws ServletException {
      endpoint = "/services/data/v28.0/tooling/sobjects/";
      hostname = "https://na12.salesforce.com";

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

      HttpClient httpclient = new HttpClient();
      
      String result = "no results";
      String qryUrl = request.getParameter("url");
      GetMethod get = new GetMethod(hostname + (qryUrl == null ? endpoint : qryUrl));
      
      String sessionId = (String) request.getSession().getAttribute(OAuthServlet.ACCESS_TOKEN);;
      get.setRequestHeader("Authorization", "Bearer " + sessionId);
      get.setRequestHeader("Content-Type", "application/json");
      

        try {
            httpclient.executeMethod(get);
            /*
            try {
                 result = new JSONObject("{result:nothing}");
                 result = new JSONObject(
                        new JSONTokener(new InputStreamReader(
                                get.getResponseBodyAsStream())));

            } catch (JSONException e) {
                e.printStackTrace();
                throw new ServletException(e);
            }
            */
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
