package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

//@EnableWebSecurity
//@Configuration
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//public class SecurityConfig {
//    @Autowired
//    private PasswordEncoder enc;
//    @Autowired
//    private JwtAuthenticationFilter jwtFilter;
//    @Autowired
//    private CustomAuthenticationEntryPoint authEntry;
//
//    @Bean
//    public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
//        http.cors()
//                .and()
//                .csrf().disable()
//                .authorizeRequests()
//                .antMatchers("/user/signup", "/users/signin","/users/signin",
//                        "/v*/api-doc*/**", "/swagger-ui/**").permitAll()
//                .antMatchers(HttpMethod.OPTIONS).permitAll()
//                .antMatchers("/customer/**").hasAuthority("CUSTOMER")
//                .antMatchers("/stylist/**").hasAuthority("STYLIST")
//                .antMatchers("/admin/**").hasAuthority("ADMIN")
//                .anyRequest().authenticated()
//                .and()
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
//        return config.getAuthenticationManager();
//    }
//}

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtAuthenticationFilter jwtFilter;
    @Autowired
    private CustomAuthenticationEntryPoint authEntry;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors()
                .and()
                .csrf().disable()
                .authorizeRequests()
//<<<<<<< HEAD
                //.antMatchers("/user/signup", "/users/signin", "/v*/api-doc*/**", "/swagger-ui/**").permitAll()
//=======
                .antMatchers("/users/signup", "/users/signin",
                        "/v*/api-doc*/**", "/swagger-ui/**", "/register","/stylist/register","/signin").permitAll()
//>>>>>>> 724d2718dcc95a18faae532fab541fa3fa9a0395
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                .antMatchers("/admin/register").permitAll()
                .antMatchers("/logout").permitAll() // Allow access to logout endpoint without authentication
                .antMatchers("/customer/**").hasAuthority("CUSTOMER")
                .antMatchers("/stylist/**").hasAuthority("STYLIST")
                .antMatchers("/admin/**").hasAuthority("ADMIN")
                .anyRequest().authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(authEntry)
                .and()
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
