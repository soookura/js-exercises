export function withResource(resource, func) {
  try {
    func(resource);
  } finally {
    resource.close();
  }
}
