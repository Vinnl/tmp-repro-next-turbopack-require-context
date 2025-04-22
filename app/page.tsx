/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const translationsContext = (require as any).context(
    "./grandparent",
    true,
    /\.txt/,
  );
  // In Webpack, logs:
  //     "File contents\n"
  // In Turbopack, logs:
  //     {"default":"File contents\n"}
  console.log(JSON.stringify(translationsContext(translationsContext.keys()[0])));
  return null;
}
