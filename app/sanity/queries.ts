import { client } from './client';
import { defineQuery } from 'next-sanity';

interface GetFeaturedProjectsProps {
  featured?: boolean | null;
  start?: number;
  end?: number;
}

const options = { next: { revalidate: 30 } }; // Revalidate every 30 seconds

export const getProjects = async ({
  featured = null,
  start = 0,
  end = 12,
}: GetFeaturedProjectsProps) => {
  const PROJECTS_QUERY = defineQuery(
    `*[_type == "project" && ($featured == null ||featuredProject == $featured) && defined(slug.current)]|order(publishedAt desc)[$start...$end]{_id,
    'slug':slug.current,
    title,
    featuredProject,
    techStack,
    image,
    body,
    screenshots,
    }`
  );
  return await client.fetch(
    PROJECTS_QUERY,
    {
      featured,
      start,
      end,
    },
    options
  );
};
