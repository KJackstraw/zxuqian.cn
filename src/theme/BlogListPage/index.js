/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogPostItem from "../BlogPostItem";
import BlogListPaginator from "@theme/BlogListPaginator";

function BlogListPage(props) {
  const { metadata, items } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const isBlogOnlyMode = metadata.permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : "Blog";
  const description = `不仅仅是前端工程师，分享React.js, HTML, CSS, JavaScript, Node.js 技术以及个人发展、自我提升相关的心得`;
  return (
    <Layout title={title} description={description}>
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {items.map(({ content: BlogPostContent }) => (
              <BlogPostItem
                key={BlogPostContent.metadata.permalink}
                frontMatter={BlogPostContent.frontMatter}
                metadata={BlogPostContent.metadata}
                truncated={BlogPostContent.metadata.truncated}
              >
                <BlogPostContent />
              </BlogPostItem>
            ))}
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;
