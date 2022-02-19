import Link from "next/link";
import React from "react";

import styles from "./Breadcrumb.module.css";

const getSchema = (data) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: data.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@id": `https://99.co/${item.url}`,
      name: item.title,
    },
    name: item.title,
  })),
});

export default function Breadcrumb({ breadcrumbs }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSchema(breadcrumbs)),
        }}
      />
      <ol className={styles.breadcrumbs}>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li
              className={styles.breadcrumb}
              key={`${breadcrumb.title}_${index}`}
              data-tracking="Breadcrumb clicked"
              data-tracking-crumb-title={breadcrumb.title}
              data-tracking-crumb-href={breadcrumb.url}
            >
              <Link href={breadcrumb.url}>
                <a itemProp="item">
                  <span itemProp="name">{breadcrumb.title}</span>
                  <meta itemProp="position" content={index + 1} />
                </a>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
