package com.caiquekola.trocadelivros.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "book_reviews")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BookReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable = false, unique = true)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id", nullable = false)
    private Book book; // Livro sendo avaliado

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // Usuário que fez a resenha

    @Column(columnDefinition = "TEXT", nullable = false)
    private String reviewText; // Texto da resenha

    @Column(nullable = false)
    @Enumerated(EnumType.ORDINAL)
    private Rating rating; // Nota da resenha (1 a 5)

    @Column(nullable = false, updatable = false)
    private LocalDateTime reviewDate = LocalDateTime.now(); // Data da resenha

    public enum Rating {
        ONE(1), TWO(2), THREE(3), FOUR(4), FIVE(5);
        private final int value;
        Rating(int value) { this.value = value; }
        public int getValue() { return value; }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public LocalDateTime getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(LocalDateTime reviewDate) {
        this.reviewDate = reviewDate;
    }
}
