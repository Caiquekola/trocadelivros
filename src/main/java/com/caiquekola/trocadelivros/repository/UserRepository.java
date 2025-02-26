package com.caiquekola.trocadelivros.repository;

import com.caiquekola.trocadelivros.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
}
