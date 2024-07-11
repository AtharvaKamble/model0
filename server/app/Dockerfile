# syntax=docker/dockerfile:1

FROM golang:1.22.1

WORKDIR .

COPY go.mod go.sum ./

RUN go mod download

COPY *.go ./

RUN CGO_ENABLED=0 GOOS=linux go build -o /model0-app

CMD ["/model0-app"]