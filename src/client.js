/* Es el lugar donde nos conectamos al cliente de sanity  */
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'aeuylm03',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skAKnv6kZTcZUMN1XueQjYJN75iznPqXJB33f3AuHgKIcmclILEL8qCzDcG8nmPIVZHIQoDefMxjByxUYCXYgfKzjxnoFMlqaV6PefQ8kIu8jhgpPzGvl7BzAJCaEqctXFYezdWMyitt001QpVUByDYGdh32ViYuBPTCpnn4L39oMJQq2tnu',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);