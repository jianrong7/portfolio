import Link from "next/link";
import Image from "next/image";
import React from "react";
import cx from "classnames";
import { useTheme } from "next-themes";

import styles from "./Breadcrumbs.module.css";

interface BreadcrumbType {
  url: string;
  title: string;
}

interface BreadcrumbsType {
  breadcrumbs: BreadcrumbType[];
}

const getSchema = (breadcrumbs: BreadcrumbType[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@id": `https://jianrong.dev${item.url}`,
      name: item.title,
    },
    name: item.title,
  })),
});

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsType) {
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
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
              {index !== 0 && (
                <Image
                  src={
                    theme === "light" ? "/chevron_light.png" : "/chevron.png"
                  }
                  height={10}
                  width={10}
                  alt=""
                />
              )}
              <Link href={breadcrumb.url}>
                <a itemProp="item">
                  <span itemProp="name" className={styles.breadcrumbText}>
                    {breadcrumb.title}
                  </span>
                  <meta itemProp="position" content={(index + 1).toString()} />
                </a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
