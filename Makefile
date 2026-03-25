.PHONY: proto-sync proto-check codegen build test

# Proto sync configuration
PROTO_REPO ?= https://github.com/auspiciouswombat/confidant-proto.git
PROTO_REF ?= main
PROTO_DIR = proto

# Sync proto files from confidant-proto repo
proto-sync:
	@echo "Syncing proto from $(PROTO_REPO) @ $(PROTO_REF)..."
	@rm -rf $(PROTO_DIR)
	@git clone --depth 1 --branch $(PROTO_REF) $(PROTO_REPO) $(PROTO_DIR) 2>/dev/null
	@COMMIT=$$(cd $(PROTO_DIR) && git rev-parse HEAD); \
	rm -rf $(PROTO_DIR)/.git; \
	echo "$$COMMIT" > $(PROTO_DIR)/.proto-version
	@echo "Proto synced. Run 'make codegen' to regenerate stubs."

# Check if local proto is behind remote
proto-check:
	@LOCAL=$$(cat $(PROTO_DIR)/.proto-version 2>/dev/null || echo "unknown"); \
	REMOTE=$$(git ls-remote $(PROTO_REPO) $(PROTO_REF) 2>/dev/null | cut -f1); \
	if [ "$$LOCAL" != "$$REMOTE" ] && [ "$$REMOTE" != "" ]; then \
		echo "Proto is out of date. Run 'make proto-sync' to update."; \
		echo "   Local:  $$LOCAL"; \
		echo "   Remote: $$REMOTE"; \
	else \
		echo "Proto is up to date."; \
	fi

# Generate TypeScript proto stubs
codegen:
	@if [ ! -d "$(PROTO_DIR)/confidant" ]; then \
		echo "Error: $(PROTO_DIR)/confidant not found. Run: make proto-sync"; \
		exit 1; \
	fi
	PATH="$$PATH:./node_modules/.bin" buf generate $(PROTO_DIR)

# Build (runs codegen first via npm prebuild)
build:
	npm run build

# Run tests
test:
	npm test
