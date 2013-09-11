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
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletInputStream;
import javax.servlet.http.Cookie;


public class BitbucketServlet extends HttpServlet {
    public void init() throws ServletException {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //response.sendRedirect(request.getContextPath() + "/index.html");
    	HttpClient httpclient = new HttpClient();
    	JSONObject result;
        GetMethod get = new GetMethod((String)request.getParameter("url"));

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
