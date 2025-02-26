package com.caiquekola.trocadelivros.service;

import com.caiquekola.trocadelivros.model.BookReview;
import com.caiquekola.trocadelivros.repository.BookReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookReviewService {

    private final BookReviewRepository bookReviewRepository;

    public BookReviewService(BookReviewRepository bookReviewRepository) {
        this.bookReviewRepository = bookReviewRepository;
    }

    public List<BookReview> getReviewsByBook(Long bookId) {
        return bookReviewRepository.findByBookId(bookId);
    }

    public Optional<BookReview> getReviewById(Long id) {
        return bookReviewRepository.findById(id);
    }

    public BookReview addReview(BookReview review) {
        return bookReviewRepository.save(review);
    }

    public BookReview updateReview(Long id, BookReview updatedReview) {
        return bookReviewRepository.findById(id)
                .map(review -> {
                    review.setReviewText(updatedReview.getReviewText());
                    return bookReviewRepository.save(review);
                }).orElseThrow(() -> new RuntimeException("Review not found"));
    }

    public void deleteReview(Long id) {
        bookReviewRepository.deleteById(id);
    }
}
