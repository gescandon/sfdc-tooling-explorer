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
  
	String endpoint;
	String hostname;
    public void init() throws ServletException {
      hostname = "https://na12.salesforce.com";
      endpoint = hostname + "/services/data/v28.0/tooling";
      
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

      HttpClient httpclient = new HttpClient();
      
      String result = "no results";
      String query = request.getParameter("query");

      
      GetMethod get = new GetMethod(endpoint + (query == null ? "/sobjects": "/query?q=" + URLEncoder.encode(query, "UTF-8")));
      
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
