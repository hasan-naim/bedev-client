import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

function DetailsPage() {
  const data = useLoaderData();

  return (
    <div className="grid-cols col-span-4">
      <div>
        <div className="flex">
          <h1 className="text-5xl text-gray-200 font-semibold w-full mb-12">
            {data.name}
          </h1>
          {/* Download pdf section */}

          <PDFDownloadLink
            document={
              <Document>
                <Page style={styles.body}>
                  <Text style={styles.header} fixed>
                    {data.name}
                  </Text>
                  <Image style={styles.image} src={data.img} />
                  <Text style={styles.text}>{data.details}</Text>
                  <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                      `${pageNumber} / ${totalPages}`
                    }
                  />
                </Page>
              </Document>
            }
            filename={`${data.name}`}
          >
            {({ loading }) =>
              loading ? (
                <button className="btn btn-primary border-red-600 hover:border-red-700 outline-red-600 bg-red-600 hover:bg-red-700">
                  Loading...
                </button>
              ) : (
                <button className="btn btn-primary border-red-600 hover:border-red-700 outline-red-600 bg-red-600 hover:bg-red-700">
                  Download Pdf
                </button>
              )
            }
          </PDFDownloadLink>
          {/* download pdf section is done */}
        </div>

        <img className="w-full rounded-lg mb-12" src={data.img} alt="" />
        <p>{data.details}</p>
        <div className="mt-12 space-x-4 text-center">
          <Link to={`/purchase/${data.id}`} className="btn btn-primary">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
