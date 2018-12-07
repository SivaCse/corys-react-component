import React, { Component } from "react";

export default function({ message = "Hello World!" }) {
  return (
    <div>
      <h2>{this.props.message}</h2>
    </div>
  );
}
