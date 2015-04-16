package com.appirio;

import java.io.IOException;

import javax.servlet.ServletException;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.methods.GetMethod;

public class SFDCToolingManager {

/*
	    public static String getQuery(String objectName, String recordName) {
	    	System.out.println(objectName + " " + recordName);
	    	String objectQuery = "Select+id,Name+from+";
	        String query = objectName == null ? "" : objectQuery + objectName;
	        query += recordName == null ? "" : "+where+Name+=+'" + recordName + "'";
	        query =  ("".equals(query) ? "/sobjects": "/query?q=" + query);
	        System.out.println(query);
	        return query;
	    }
*/	    
	    public static String explore(String toolingUrl, String sessionId) throws ServletException, IOException{
	    	System.out.println("*** explore query : " + toolingUrl);
	        HttpClient httpclient = new HttpClient();
	        GetMethod get = new GetMethod(toolingUrl.replaceAll(" ", "+"));
	        
	        get.setRequestHeader("Authorization", "Bearer " + sessionId);
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
	          return result;
	    }
	    /*
	    public static String getTooling(String objectName, String recordName, String sessionId, String url) throws ServletException, IOException{
	    	String query = getQuery(objectName, recordName);
	        HttpClient httpclient = new HttpClient();
	        GetMethod get = new GetMethod(query);
	        
	        get.setRequestHeader("Authorization", "Bearer " + sessionId);
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
	          return result;
	    }
	    */
}
