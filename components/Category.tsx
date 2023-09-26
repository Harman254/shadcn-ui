
import { KeyFeatures } from "@/constants"
import { Heading } from "@radix-ui/themes"
import Market from "./Market"
const Category= () => {
  return (
    <section className=" py-12">
    <div className="container mx-auto text-center">
      <Heading as="h1" className="font-bold text-purple-700 text-4xl">Key Features</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {KeyFeatures.map((feature) => (
        <div className="p-4" key={feature.id}>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-primary">{feature.description}</p>
        </div>

        ))}
        
      </div>
    </div>
    <Market />
  </section>
  )
}

export default Category