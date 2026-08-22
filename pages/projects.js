import { useState, useMemo, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import Layout from '../components/blog_layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/projects.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { getAllProjects, PROJECT_CATEGORIES } from '../lib/projects';

export async function getStaticProps() {
  const projects = getAllProjects();
  return {
    props: {
      projects,
      categories: PROJECT_CATEGORIES,
    },
  };
}

export default function Projects({ projects, categories }) {
  const [filter, setFilter] = useState('all');

  const getTagLabel = useCallback(
    (tagId) => {
      const category = categories?.find(
        (c) => c.id.toLowerCase() === tagId.toLowerCase()
      );
      if (category) return category.label;
      return tagId
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    },
    [categories]
  );

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(
      (p) => Array.isArray(p.tags) && p.tags.includes(filter)
    );
  }, [projects, filter]);

  const activeProjects = useMemo(() => {
    return filteredProjects.filter(
      (p) => !p.deprecated && !p.tags?.includes('deprecated')
    );
  }, [filteredProjects]);

  const deprecatedProjects = useMemo(() => {
    return filteredProjects.filter(
      (p) => p.deprecated || p.tags?.includes('deprecated')
    );
  }, [filteredProjects]);

  const renderProjectCard = (project) => {
    const isDeprecated = Boolean(
      project.deprecated || project.tags?.includes('deprecated')
    );
    const isFeatured = Boolean(project.featured && !isDeprecated);

    return (
      <a
        key={project.id}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.projectCard} ${isFeatured ? styles.featuredCard : ''}`}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={project.image || '/images/projects/sovereign.png'}
            alt={project.title}
            width={600}
            height={338}
            className={styles.projectImage}
            priority
          />
        </div>

        <div className={styles.cardBody}>
          <div className={styles.titleRow}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            {isFeatured && (
              <span className={styles.featuredPill}>👑 Featured! 👑</span>
            )}
            {isDeprecated && (
              <span className={styles.deprecatedPill}>Deprecated</span>
            )}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className={styles.linkIcon}
              aria-hidden="true"
            />
          </div>

          {project.pitch && (
            <p className={styles.projectPitch}>{project.pitch}</p>
          )}

          <p className={styles.projectDesc}>{project.description}</p>

          {Array.isArray(project.tags) &&
            project.tags.filter((t) => t.toLowerCase() !== 'deprecated').length > 0 && (
              <div className={styles.tagsContainer}>
                {project.tags
                  .filter((t) => t.toLowerCase() !== 'deprecated')
                  .map((tag) => (
                    <span key={tag} className={styles.tagPill}>
                      {getTagLabel(tag)}
                    </span>
                  ))}
              </div>
            )}
        </div>
      </a>
    );
  };

  return (
    <Layout>
      <Head>
        <title>Cool Projects - Franklin Yin</title>
        <meta
          name="description"
          content="Cool projects and software built by Franklin Yin."
        />
        <meta name="og:image" content="/images/headshot.jpg" />
      </Head>

      <Fade triggerOnce>
        <section className={styles.headerSection}>
          <h1 className={utilStyles.headingLg}>Cool Projects</h1>
          <p className={styles.pageDescription}>
            Websites/Apps I&apos;ve made in my free time which I think are cool enough to share with the world. Cool = one of fun or useful
          </p>
          <p className={`${utilStyles.xs} ${styles.subnav}`}>
            <Link href="/">Back to Home</Link> | <Link href="/blog">My Blog</Link> |{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Yin4TheWin"
            >
              GitHub
            </a>{' '}
            | Filter by:{' '}
            <span className={utilStyles.selectContainer}>
              <select
                className={utilStyles.selectBox}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter projects by category"
              >
                <option value="all">All Projects</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <span className={utilStyles.selectArrow}>▼</span>
            </span>
          </p>
        </section>

        {filteredProjects.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No projects in this category yet. Check back soon!</p>
          </div>
        ) : filter === 'deprecated' ? (
          <section className={styles.deprecatedSection}>
            <p className={styles.deprecatedNotice}>
              Deprecated projects are no longer actively maintained and I cannot guarantee availability or a smooth experience. However, I&apos;m still open to feedback, feature requests, and contributions on these! Just{' '}
              <a href="mailto:chat@franklinyin.com">send me a message</a>.
            </p>
            <div className={styles.projectsGrid}>
              {filteredProjects.map(renderProjectCard)}
            </div>
          </section>
        ) : (
          <>
            {activeProjects.length > 0 && (
              <section className={styles.projectsGrid}>
                {activeProjects.map(renderProjectCard)}
              </section>
            )}

            {deprecatedProjects.length > 0 && (
              <section className={styles.deprecatedSection}>
                <div className={styles.dividerContainer}>
                  <hr className={styles.dividerLine} />
                  <span className={styles.dividerLabel}>Deprecated Projects</span>
                  <hr className={styles.dividerLine} />
                </div>
                <p className={styles.deprecatedNotice}>
                  Deprecated projects are no longer actively maintained and I cannot guarantee availability or a smooth experience. However, I&apos;m still open to feedback, feature requests, and contributions on these! Just{' '}
                  <a href="mailto:chat@franklinyin.com">send me a message</a>.
                </p>
                <div className={styles.projectsGrid}>
                  {deprecatedProjects.map(renderProjectCard)}
                </div>
              </section>
            )}
          </>
        )}
      </Fade>
    </Layout>
  );
}
