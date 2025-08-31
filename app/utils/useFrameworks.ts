export const useFrameworks = () => {
  const frameworks = [
    "c-sharp.png",
    "clojure.png",
    "cpp.png",
    "django.png",
    "elixir.png",
    "erlang.png",
    "golang.png",
    "haskell.png",
    "java.png",
    "kotlin.png",
    "laravel.png",
    "next.png",
    "node.png",
    "nuxt.png",
    "perl.png",
    "python.png",
    "rails.png",
    "rust.png",
    "scala.png",
    "swift.png"
  ]

  const getFrameworkPath = (filename: string) => `/illustration/tech/${filename}`

  const getFrameworkName = (filename: string) => {
    return filename.replace(".png", "").replace("-", " ")
  }

  return {
    frameworks,
    getFrameworkPath,
    getFrameworkName
  }
}
