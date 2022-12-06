import { Card } from "@components/Card";
import { Heading } from "@components/Heading";
import { Typography } from "@components/Typography";

export default function Home() {
  return (
    <div className="container space-y-10">
      <div>
        <Heading level={1} color="base">
          abcdef
        </Heading>
        <Heading level={1} color="weak">
          abcdef
        </Heading>
        <Heading level={1} color="primary">
          abcdef
        </Heading>
      </div>

      <div>
        <Heading level={2} color="base">
          abcdef
        </Heading>
        <Heading level={2} color="weak">
          abcdef
        </Heading>
        <Heading level={2} color="primary">
          abcdef
        </Heading>
      </div>

      <div>
        <Heading level={3} color="base">
          abcdef
        </Heading>
        <Heading level={3} color="weak">
          abcdef
        </Heading>
        <Heading level={3} color="primary">
          abcdef
        </Heading>
      </div>

      <Card>
        <Typography color="base">abcdef</Typography>
        <Typography color="weak">abcdef</Typography>
        <Typography color="primary">abcdef</Typography>
      </Card>

      <Card palette="primary">
        <Typography level="caption" color="base">
          abcdef
        </Typography>
        <Typography level="caption" color="weak">
          abcdef
        </Typography>
        <Typography level="caption" color="primary">
          abcdef
        </Typography>
      </Card>
    </div>
  );
}
