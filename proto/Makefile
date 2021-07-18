OUTPUT=gen/server
NPM_BIN=$(shell npm bin)

GRPC_TOOL=$(NPM_BIN)/grpc_tools_node_protoc
TYPESCRIPT_PLUGIN=protoc-gen-ts=$(NPM_BIN)/protoc-gen-ts

COMMAND=$(GRPC_TOOL) \
  --plugin=${TYPESCRIPT_PLUGIN} \
  --js_out=import_style=commonjs,binary:$(OUTPUT) \
  --grpc_out=grpc_js:$(OUTPUT) \
  --ts_out=grpc_js:$(OUTPUT) \
  -I ./src \
  ./src/*.proto

.PHONY: protogen
gen_server:
	rm -rf $(OUTPUT) && mkdir -p $(OUTPUT)
	$(COMMAND)

gen_client:
	rm -rf gen/client && mkdir -p gen/client
	protoc -I=./src ./src/*.proto --js_out=import_style=commonjs:gen/client --grpc-web_out=import_style=typescript,mode=grpcwebtext:gen/client
