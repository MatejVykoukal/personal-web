import type { NextApiRequest, NextApiResponse } from "next";
import { renderToStream } from "@react-pdf/renderer";
import React from "react";
import CVDocument from "~/components/CVDocument";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const stream = await renderToStream(React.createElement(CVDocument));
    const isInline = req.query.inline === "1";

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `${isInline ? "inline" : "attachment"}; filename=\"Matej_Vykoukal_CV.pdf\"`
    );

    stream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).end("Failed to generate PDF");
  }
}
