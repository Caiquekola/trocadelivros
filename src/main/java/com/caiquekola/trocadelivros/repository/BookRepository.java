package com.caiquekola.trocadelivros.repository;

import com.caiquekola.trocadelivros.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
