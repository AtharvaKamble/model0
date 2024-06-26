package main

import (
	"fmt"
	"net/http"

	"github.com/AtharvaKamble/model0/server/internal/routes"
)

func main() {
	router := routes.NewRouter()

	port := 6969

	addr := fmt.Sprintf(":%d", port)

	fmt.Println("Server listening on http://localhost%s\n", addr)

	err := http.ListenAndServe(addr, router)

	if err != nil {
		panic(err)
	}
}
