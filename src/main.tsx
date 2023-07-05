import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";

import { App } from "./App.tsx";

createServer({
  models: {
    product: Model,
  },

  seeds(server) {
    server.db.loadData({
      products: [
        {
          id: 1,
          name: "Lorem Ipsum",
          image:
            "https://play-lh.googleusercontent.com/i4JjQCD3uokEzHs58zOAeNkCgaUatulhYTfnB3_p_MRzgaw9pymaWT_h5uj1tfA61w=rw",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          amount: 209.99,
          createdAt: new Date("2023-07-04 20:00:00"),
        },
        {
          id: 2,
          name: "Lorem Ipsum",
          image:
            "https://play-lh.googleusercontent.com/i4JjQCD3uokEzHs58zOAeNkCgaUatulhYTfnB3_p_MRzgaw9pymaWT_h5uj1tfA61w=rw",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          amount: 269.99,
          createdAt: new Date("2023-07-04 20:00:00"),
        },
        {
          id: 3,
          name: "Lorem Ipsum",
          image:
            "https://play-lh.googleusercontent.com/i4JjQCD3uokEzHs58zOAeNkCgaUatulhYTfnB3_p_MRzgaw9pymaWT_h5uj1tfA61w=rw",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          amount: 289.99,
          createdAt: new Date("2023-07-04 20:00:00"),
        },
        {
          id: 4,
          name: "Lorem Ipsum",
          image:
            "https://play-lh.googleusercontent.com/i4JjQCD3uokEzHs58zOAeNkCgaUatulhYTfnB3_p_MRzgaw9pymaWT_h5uj1tfA61w=rw",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          amount: 209.99,
          createdAt: new Date("2023-07-04 20:00:00"),
        },
        {
          id: 5,
          name: "Lorem Ipsum",
          image:
            "https://play-lh.googleusercontent.com/i4JjQCD3uokEzHs58zOAeNkCgaUatulhYTfnB3_p_MRzgaw9pymaWT_h5uj1tfA61w=rw",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          amount: 269.99,
          createdAt: new Date("2023-07-04 20:00:00"),
        },
        {
          id: 6,
          name: "Lorem Ipsum",
          image:
            "https://play-lh.googleusercontent.com/i4JjQCD3uokEzHs58zOAeNkCgaUatulhYTfnB3_p_MRzgaw9pymaWT_h5uj1tfA61w=rw",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          amount: 289.99,
          createdAt: new Date("2023-07-04 20:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/products", () => {
      return this.schema.all("product");
    });

    this.post("/products", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("product", data);
    });
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
