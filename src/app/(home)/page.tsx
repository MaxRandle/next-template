import { Alert } from "@components/Alert";
import { Card } from "@components/Card";
import { Heading } from "@components/Heading";
import { Palette } from "@components/Palette";
import { Typography } from "@components/Typography";

export default function Home() {
  return (
    <div className="container space-y-10">
      <Palette />

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

      <Alert status="success">
        <Typography>Your custom order SpongeBob cake is on the way!</Typography>
      </Alert>
      <Alert status="info">
        <Typography>
          We ship cakes on Tuesdays and Fridays of each week.
        </Typography>
      </Alert>
      <Alert status="warning">
        <Typography>
          We're running low on Spiderman cakes, only 4 left!
        </Typography>
      </Alert>
      <Alert status="danger">
        <Typography>
          Your cake order is invalid, please enter a different request.
        </Typography>
      </Alert>
    </div>
  );
}
