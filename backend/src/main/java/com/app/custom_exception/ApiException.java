package com.app.custom_exception;

public class ApiException extends Exception {

	public ApiException(String mesg) {
		super(mesg);
	}
}
