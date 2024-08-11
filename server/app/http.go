package main

import (
    "os"
    "log"
	"fmt"
	"net/http"
    "context"

	"github.com/aws/aws-sdk-go-v2/service/sagemaker"
    sagemakertypes "github.com/aws/aws-sdk-go-v2/service/sagemaker/types"
)

type handler struct {
	// gateway
	App *model0
}

func NewHandler(app *model0) *handler {
	return &handler{App: app}
}

func (h *handler) RegisterRoutes(mux *http.ServeMux) {

	mux.HandleFunc("POST /api/model/create", h.CreateModel)
	mux.HandleFunc("GET /api/model", h.GetModel)
}

func (h *handler) CreateModel(w http.ResponseWriter, r *http.Request) {
    modelName := "YeehModelTest"
    imageName := os.Getenv("AWS_PRIMARY_IMAGE_NAME")
    executionRoleARN := os.Getenv("AWS_ROLE_ARN")

    modelInput := &sagemaker.CreateModelInput{
        ModelName: &modelName,
        PrimaryContainer: &sagemakertypes.ContainerDefinition{
            Image: &imageName,
        },
        ExecutionRoleArn: &executionRoleARN,
    }

    _, err := h.App.Client.CreateModel(context.TODO(), modelInput)

    if err != nil {
        fmt.Println("Model creation error: ", err)
        return
    }

	log.Printf("%s - Model created successfully.\n", *modelInput.ModelName)
}

func (h *handler) GetModel(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get Model hit")
}
