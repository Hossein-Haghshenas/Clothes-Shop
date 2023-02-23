import Image from "next/image";
import { truncate } from "lodash";
import { Button, Container } from "../utils";

const HomeBlog = ({ blogData }) => {
  return (
    <>
      <Container className="pb-12" flex col alignCenter gap2>
        <section>
          <h3 className="font-bold text-[25px]">Our Blog</h3>
        </section>
        <Container flex justifyCenter gap1 wrap>
          {blogData?.map((product) => {
            const { id, title, description, image } = product;
            console.log(product);

            return (
              <Container className="w-[20rem] h-[28rem] rounded-lg shadow-xl" flex col gap1 key={id}>
                <section>
                  <Image className="rounded-xl w-full h-[14rem]" width="400" height="300" src={image} alt={title} />
                </section>
                <section className="flex justify-around ">
                  <p>{truncate(title, { length: 35 })}</p>
                </section>
                <section className="flex justify-around px-4 h-[4.5rem]">
                  <p>{truncate(description, { length: 75 })}</p>
                </section>
                <section className="flex justify-around">
                  <Button>See More →</Button>
                </section>
              </Container>
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default HomeBlog;
