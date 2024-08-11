package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/sagemaker"
    "github.com/joho/godotenv"
)

const (
	httpAddr = ":8080"
)

type model0 struct {
	// default variables
    Client* sagemaker.Client
}

func main() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading environment variables: ", err)
    }

	app := StartApp()
	app.InitializeAWS()

	mux := http.NewServeMux()

	handler := NewHandler(app)
	handler.RegisterRoutes(mux)

	if err := http.ListenAndServe(httpAddr, mux); err != nil {
		log.Fatal("Failed to start server")
	}
}

func (m *model0) InitializeAWS() {
	cfg, err := config.LoadDefaultConfig(context.TODO())

	if err != nil {
		log.Fatal("Error in loading AWS Config: ", err)
	}

	m.Client = sagemaker.NewFromConfig(cfg)

	fmt.Println("AWS Sagemaker booted successfully")

}

func StartApp() *model0 {
	return &model0{}
}
