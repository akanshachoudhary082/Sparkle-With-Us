package com.app.security;

//import java.security.Key;
//import java.util.Collection;
//import java.util.Date;
//import java.util.List;
//import java.util.stream.Collectors;
//
//import javax.annotation.PostConstruct;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.stereotype.Component;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.security.Keys;
//import lombok.extern.slf4j.Slf4j;

//@Component
//@Slf4j
//public class JwtUtils {
//
//	@Value("${SECRET_KEY}")
//	private String jwtSecret;
//
//	@Value("${EXP_TIMEOUT}")
//	private int jwtExpirationMs;
//	
//	
//	private Key key;
//
//	@PostConstruct
//	public void init() {
//		key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
//	}
//
//	public String generateJwtToken(Authentication authentication) {
//		log.info("generate jwt token " + authentication);
//		CustomUserDetails userPrincipal = (CustomUserDetails) authentication.getPrincipal();
//
//		return Jwts.builder() 
//				.setSubject((userPrincipal.getUsername())) 
//				.setIssuedAt(new Date())
//				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
//			
//				.claim("authorities", getAuthoritiesInString(userPrincipal.getAuthorities()))
//				
//				.claim("user_id",userPrincipal.getUser().getId())
//		
//				.signWith(key, SignatureAlgorithm.HS512) 
//
//				
//				.compact();
//	}
//
//	
//	public String getUserNameFromJwtToken(Claims claims) {
//		return claims.getSubject();
//	}
//
//	
//	public Claims validateJwtToken(String jwtToken) {
//		
//		Claims claims = Jwts.parserBuilder() 
//				.setSigningKey(key) 
//				.build()
//				.parseClaimsJws(jwtToken) 
//				.getBody();
//		
//		return claims;		
//	}
//	
//
//	private String getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities) {
//		String authorityString = authorities.stream().
//				map(authority -> authority.getAuthority())
//				.collect(Collectors.joining(","));
//		System.out.println(authorityString);
//		return authorityString;
//	}
//	
//		public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims) {
//		String authString = (String) claims.get("authorities");
//		List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(authString);
//		authorities.forEach(System.out::println);
//		return authorities;
//	}
//	// this method will be invoked by our custom JWT filter to get user id n store it in auth token
//			public Long getUserIdFromJwtToken(Claims claims) {
//				return Long.valueOf((int)claims.get("user_id"));			
//			}
//			
//			public Authentication populateAuthenticationTokenFromJWT(String jwt) {
//				
//				Claims payloadClaims = validateJwtToken(jwt);
//				
//				String email = getUserNameFromJwtToken(payloadClaims);
//				
//				List<GrantedAuthority> authorities = getAuthoritiesFromClaims(payloadClaims);
//				
//				Long userId=getUserIdFromJwtToken(payloadClaims);
//				
//				UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email,userId,
//						authorities);
//				System.out.println("is authenticated "+token.isAuthenticated());
//				return token;
//		
//			}
//
//}

import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtils {

    @Value("${SECRET_KEY}")
    private String jwtSecret;

    @Value("${EXP_TIMEOUT}")
    private int jwtExpirationMs;
    
    private Key key;

    @PostConstruct
    public void init() {
        key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

//<<<<<<< HEAD
//    public String generateJwtToken(Authentication authentication) {
//        log.info("Generating JWT token for: {}", authentication.getName());
//        CustomUserDetails userPrincipal = (CustomUserDetails) authentication.getPrincipal();
//=======
	public String generateJwtToken(Authentication authentication) {
		//log.info("generate jwt token " + authentication);
		CustomUserDetails userPrincipal = (CustomUserDetails) authentication.getPrincipal();
//>>>>>>> 724d2718dcc95a18faae532fab541fa3fa9a0395

        return Jwts.builder() 
                .setSubject(userPrincipal.getUsername()) 
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .claim("authorities", getAuthoritiesInString(userPrincipal.getAuthorities()))
                .claim("user_id", userPrincipal.getUser().getId())
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    public String getUserNameFromJwtToken(Claims claims) {
        return claims.getSubject();
    }

    public Claims validateJwtToken(String jwtToken) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jwtToken)
                .getBody();
    }

    private String getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));
    }

    public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims) {
        String authString = (String) claims.get("authorities");
        return AuthorityUtils.commaSeparatedStringToAuthorityList(authString);
    }

    public Long getUserIdFromJwtToken(Claims claims) {
        // Use longValue() to handle numeric values more robustly
        return ((Number) claims.get("user_id")).longValue();
    }

    public Authentication populateAuthenticationTokenFromJWT(String jwt) {
        Claims claims = validateJwtToken(jwt);
        String email = getUserNameFromJwtToken(claims);
        List<GrantedAuthority> authorities = getAuthoritiesFromClaims(claims);
        Long userId = getUserIdFromJwtToken(claims);

        // Create UsernamePasswordAuthenticationToken with user details and authorities
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                email, 
                userId, 
                authorities
        );
        log.info("Created authentication token for user: {}", email);
        return authenticationToken;
    }
}
