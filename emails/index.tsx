import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Link,
} from "@react-email/components";

interface InquiryEmailProps {
  username: string;
  email: string;
  organization?: string;
  service: string;
  message: string;
}

const InquiryEmail = ({
  username,
  email,
  organization,
  service,
  message,
}: InquiryEmailProps) => (
  <Html>
    <Head />
    <Preview>
      New Inquiry from {username} ({email})
    </Preview>
    <Body
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <Container
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Heading style={{ color: "#333333", fontSize: "24px" }}>
          New Contact Inquiry
        </Heading>
        <Text style={{ fontSize: "16px", color: "#333" }}>
          You have received a new inquiry through the contact form. Here are the
          details:
        </Text>

        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "12px" }}>
            <strong>Name:</strong>
            <Text style={{ marginLeft: "10px", display: "inline-block" }}>
              {username}
            </Text>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <strong>Email:</strong>
            <Text style={{ marginLeft: "10px", display: "inline-block" }}>
              {email}
            </Text>
          </div>

          {organization && (
            <div style={{ marginBottom: "12px" }}>
              <strong>Organization:</strong>
              <Text style={{ marginLeft: "10px", display: "inline-block" }}>
                {organization}
              </Text>
            </div>
          )}

          <div style={{ marginBottom: "12px" }}>
            <strong>Service:</strong>
            <Text style={{ marginLeft: "10px", display: "inline-block" }}>
              {service}
            </Text>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <strong>Message:</strong>
            <Text style={{ marginLeft: "10px", display: "inline-block" }}>
              {message}
            </Text>
          </div>
        </div>

        <Text style={{ fontSize: "14px", marginTop: "20px" }}>
          Please respond to this inquiry as soon as possible.
        </Text>

        <Hr />

        <Text style={{ fontSize: "14px", color: "#999999" }}>
          Sent from <Link href="https://yourwebsite.com">Your Website</Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default InquiryEmail;
