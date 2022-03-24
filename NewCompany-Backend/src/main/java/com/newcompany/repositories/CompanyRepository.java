package com.newcompany.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.newcompany.entities.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

}
