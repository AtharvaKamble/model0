package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/sagemaker"
)

const (
	httpAddr = ":8080"
)

func main() {
	initializeAWS()

	mux := http.NewServeMux()

	handler := NewHandler()
	handler.RegisterRoutes(mux)

	if err := http.ListenAndServe(httpAddr, mux); err != nil {
		log.Fatal("Failed to start server")
	}

}

func initializeAWS() {
	cfg, err := config.LoadDefaultConfig(context.TODO())

	if err != nil {
		log.Fatal("Error in loading AWS Config: ", err)
	}

	_ = sagemaker.NewFromConfig(cfg)

	fmt.Println("AWS Sagemaker booted successfully")

}
