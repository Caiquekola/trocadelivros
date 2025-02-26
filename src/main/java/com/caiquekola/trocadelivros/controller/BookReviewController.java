package com.caiquekola.trocadelivros.controller;

import com.caiquekola.trocadelivros.model.BookReview;
import com.caiquekola.trocadelivros.service.BookReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class BookReviewController {

    private final BookReviewService bookReviewService;

    public BookReviewController(BookReviewService bookReviewService) {
        this.bookReviewService = bookReviewService;
    }

    @PostMapping
    public BookReview addReview(@RequestBody BookReview review) {
        return bookReviewService.addReview(review);
    }
}