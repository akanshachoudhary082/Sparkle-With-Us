package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ApiException;
import com.app.dto.Signup;
import com.app.entities.Admin;
import com.app.entities.Customer;
import com.app.entities.Stylist;
import com.app.entities.UserEntity;
import com.app.repository.AddressRepository;
import com.app.repository.AdminRepository;
import com.app.repository.CustomerRepository;
import com.app.repository.StylistRepository;
import com.app.repository.UserEntityRepository;

@Service
@Transactional
public class SignupServiceImpl implements SignupService {
    // dep : dao layer i/f
    @Autowired
    private CustomerRepository customerDao;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private StylistRepository stylistDao;
    @Autowired
    private AdminRepository adminDao;
    @Autowired
    private UserEntityRepository userEntityRepository;
    // dep
    @Autowired
    private ModelMapper mapper;
    // dep 
    @Autowired
    private PasswordEncoder encoder;

    @Override
    public Signup userRegistration(Signup reqDTO) throws Exception {
        // dto --> entity
        UserEntity user = mapper.map(reqDTO, UserEntity.class);
        var persistUser = userEntityRepository.findByEmail(reqDTO.getEmail());
        if ( !persistUser.isEmpty())
            throw new ApiException("Email already exists !!!");
        
            user.setPassword(encoder.encode(reqDTO.getPassword())); // pwd : encrypted using SHA
            var persistAddress = addressRepository.save(user.getAddress());
            user.setAddress(persistAddress);
            UserEntity Saveduser = userEntityRepository.save(user);
        return mapper.map(Saveduser, Signup.class);
    }

    @Override
    public Signup  stylistRegistration(Signup reqDTO) throws Exception {
        // dto --> entity
        Stylist stylist = mapper.map(reqDTO, Stylist.class);
        var user = stylistDao.findByEmail(reqDTO.getEmail());
        if (user !=null)
            throw new ApiException("Email already exists !!!");
        
        stylist.setPassword(encoder.encode(stylist.getPassword())); // pwd : encrypted using SHA
        Stylist savedStylist = stylistDao.save(stylist);
        return mapper.map(savedStylist, Signup.class);
    }

    @Override
    public Signup  adminRegistration(Signup reqDTO)throws Exception {
        // dto --> entity
        Admin admin = mapper.map(reqDTO, Admin.class);
        var user = adminDao.findByEmail(reqDTO.getEmail());
        if (user != null)
            throw new ApiException("Email already exists !!!");
        
        admin.setPassword(encoder.encode(admin.getPassword())); // pwd : encrypted using SHA
        Admin savedAdmin = adminDao.save(admin);
        return mapper.map(savedAdmin, Signup.class);
    }
}