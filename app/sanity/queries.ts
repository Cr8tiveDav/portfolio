import { client } from './client';
import type { SanityDocument } from 'next-sanity';

interface GetFeaturedProjectsProps {
  featured?: boolean | null;
  start?: number;
  end?: number;
}

export const getProjects = async ({
  featured = null,
  start = 0,
  end = 12,
}: GetFeaturedProjectsProps) => {
  const query = `*[_type == "project" && ($featured == null ||featuredProject == $featured) && defined(slug.current)]|order(publishedAt desc)[$start...$end]{
  _id,
  'slug':slug.current,
  title,
  featuredProject,
  techStack,
  image,
  body,
}`;

  return await client.fetch<SanityDocument[]>(query, {
    featured,
    start,
    end,
  });
};
