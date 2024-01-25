import * as React from "react";
import {Box} from "@mui/material";
import ContentRow from "../../../components/IndividualPageContent/ContentRow";
import ContentBox from "../../../components/IndividualPageContent/ContentBox";
import {TransactionStatus} from "../../../components/TransactionStatus";
import {getLearnMoreTooltip} from "../helpers";
import TimestampValue from "../../../components/IndividualPageContent/ContentValue/TimestampValue";
import TransactionBlockRow from "./Components/TransactionBlockRow";

type StateCheckpointOverviewTabProps = {
  transaction: any;
};

export default function StateCheckpointOverviewTab({
  transaction,
}: StateCheckpointOverviewTabProps) {
  return (
    <Box marginBottom={3}>
      <ContentBox>
        <ContentRow
          title={"Version:"}
          value={<Box sx={{fontWeight: 600}}>{transaction.version}</Box>}
          tooltip={getLearnMoreTooltip("version")}
        />
        <ContentRow
          title="Status:"
          value={<TransactionStatus success={transaction.success} />}
          tooltip={getLearnMoreTooltip("status")}
        />
        <TransactionBlockRow version={transaction.version} />
        {"timestamp" in transaction && (
          <ContentRow
            title="Timestamp:"
            value={<TimestampValue timestamp={transaction.timestamp} />}
            tooltip={getLearnMoreTooltip("timestamp")}
          />
        )}
        <ContentRow
          title="VM Status:"
          value={transaction.vm_status}
          tooltip={getLearnMoreTooltip("vm_status")}
        />
      </ContentBox>
      <ContentBox>
        <ContentRow
          title="State Change Hash:"
          value={transaction.state_change_hash}
          tooltip={getLearnMoreTooltip("state_change_hash")}
        />
        <ContentRow
          title="Event Root Hash:"
          value={transaction.event_root_hash}
          tooltip={getLearnMoreTooltip("event_root_hash")}
        />
        <ContentRow
          title="Accumulator Root Hash:"
          value={transaction.accumulator_root_hash}
          tooltip={getLearnMoreTooltip("accumulator_root_hash")}
        />
      </ContentBox>
    </Box>
  );
}
