import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT ?? 3000;

const server = app.listen(Number(PORT), () => {
  console.log(`Server listening on port ${PORT}`);
});

const shutdown = (signal: string) => {
  console.log(`Shutting down with signal: ${signal}`);
  server.close((err) => {
    if (err) {
      console.error("Error closing server", err);
      process.exit(1);
    }
    process.exit(0);
  });
  setTimeout(() => {
    console.error("Forced shutdown timeout");
    process.exit(1);
  }, 10_000).unref();
};

["SIGTERM", "SIGINT"].forEach((sig) => {
  process.on(sig, () => shutdown(sig));
});

process.on("unhandledRejection", (reason) => {
  console.error({
    message: "unhandledRejection",
    err: reason instanceof Error ? reason : new Error(String(reason)),
  });
});

process.on("uncaughtException", (err) => {
  console.error({ message: "uncaughtException", err });
  shutdown("uncaughtException");
});
