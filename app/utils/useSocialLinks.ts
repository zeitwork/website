export const useSocialLinks = () => {
  const links = ref([
    { img: "github.svg", url: "https://github.com/zeitwork/zeitwork" },
    { img: "x.svg", url: "https://x.com/zeitwork" },
    { img: "discord.svg", url: "https://discord.gg/GBgRbjMDpc" }
  ])

  return { links }
}
