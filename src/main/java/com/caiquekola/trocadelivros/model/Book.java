package com.caiquekola.trocadelivros.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "books") // Nome da tabela no banco
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Alterado para Long

    private String title;
    private String author;
    private String edition;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false) // Nome da chave estrangeira no banco
    private User owner;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ConditionStatus conditionStatus;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public ConditionStatus getConditionStatus() {
        return conditionStatus;
    }

    public void setConditionStatus(ConditionStatus conditionStatus) {
        this.conditionStatus = conditionStatus;
    }
}

// 🔹 Enum separado da classe para evitar problemas
enum ConditionStatus {
    BAD, GOOD, NEW;
}
