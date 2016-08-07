package login;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginController extends HttpServlet{

	private static final long serialVersionUID = 1L;

	public void doPost (HttpServletRequest request, HttpServletResponse response){

		response.setContentType("text/html");  

		String n=request.getParameter("username");  
		String p=request.getParameter("password"); 
		System.out.println("Username  "+n+"   Password  "+p);


	}

}
