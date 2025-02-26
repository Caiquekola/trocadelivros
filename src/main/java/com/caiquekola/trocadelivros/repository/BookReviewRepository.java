package com.caiquekola.trocadelivros.repository;

import com.caiquekola.trocadelivros.model.Book;
import com.caiquekola.trocadelivros.model.BookReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookReviewRepository extends JpaRepository<BookReview, Long> {
    List<BookReview> findByBookId(Long bookId);
}
