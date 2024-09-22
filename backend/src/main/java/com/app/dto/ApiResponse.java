package com.app.dto;

import java.time.LocalDateTime;

//public class ApiResponse 
//{
//	private String message;
//	private LocalDateTime timeStamp;
//
//	public ApiResponse() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public ApiResponse(String message) {
//		super();
//		this.message = message;
//		this.timeStamp = LocalDateTime.now();
//	}
//
//	public String getMessage() {
//		return message;
//	}
//
//	public void setMessage(String message) {
//		this.message = message;
//	}
//
//	public LocalDateTime getTimeStamp() {
//		return timeStamp;
//	}
//
//	public void setTimeStamp(LocalDateTime timeStamp) {
//		this.timeStamp = timeStamp;
//	}
//
//	@Override
//	public String toString() {
//		return "ApiResponse [message=" + message + ", timeStamp=" + timeStamp + "]";
//	}
//}


//package com.app.dto;

public class ApiResponse {
    private boolean success;
    private String message;

    public ApiResponse() {
    }

    public ApiResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    // Getters and setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
