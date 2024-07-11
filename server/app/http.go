package main

import (
	"fmt"
	"net/http"
)

type handler struct {
	// gateway
	val int
}

func NewHandler() *handler {
	return &handler{val: 0}
}

func (h *handler) RegisterRoutes(mux *http.ServeMux) {

	mux.HandleFunc("GET /api/hello", h.BasicHandler)
}

func (h *handler) BasicHandler(w http.ResponseWriter, r *http.Request) {
	h.val += 1
	fmt.Printf("Basic Handler is pinged -> %d\n", h.val)
}
