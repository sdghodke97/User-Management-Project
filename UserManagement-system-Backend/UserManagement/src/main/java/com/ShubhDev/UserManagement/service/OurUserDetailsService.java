package com.ShubhDev.UserManagement.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ShubhDev.UserManagement.repository.UsersRepo;

@Service
public class OurUserDetailsService implements UserDetails, UserDetailsService{

	@Autowired
	private UsersRepo usersRepo;
	
	
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return usersRepo.findByEmail(username).orElseThrow();
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}


	public UserDetails loadUserByUsername1(String userEmail) {
		// TODO Auto-generated method stub
		return null;
	}
}
