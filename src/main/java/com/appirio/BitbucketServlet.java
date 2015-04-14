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


public class BitbucketServlet extends HttpServlet {
	String bburl;
    public void init() throws ServletException {
    	bburl = "https://bitbucket.org/api/1.0/repositories/gescandon/";
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //response.sendRedirect(request.getContextPath() + "/index.html");
    	HttpClient httpclient = new HttpClient();
    	JSONObject result;
    	String url = bburl + request.getParameter("url");
        GetMethod get = new GetMethod(url);

        try {
            httpclient.executeMethod(get);
            try {
                 result = new JSONObject("{nothing:nothing}");
                 result = new JSONObject(
                        new JSONTokener(new InputStreamReader(
                                get.getResponseBodyAsStream())));

            } catch (JSONException e) {
                e.printStackTrace();
                throw new ServletException(e);
            }
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
