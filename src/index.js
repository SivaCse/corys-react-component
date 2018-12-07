import React, { Component } from "react";

export default function({ message = "Hello World!" }) {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}
